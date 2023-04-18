function Calculator (id, elementId, options){
    this.init =  function(id, elementId, options){
        this.model = new CalculatorModel(id, options);
        var parentElement = document.getElementById(elementId);
        this.view =  new CalculatorView(id, parentElement, options);
        
        this.id = id;
        this.options = options; 
        this.widgetElement = this.view.getWidget()
        this.setWidgets()
        
    }
    this.setWidgets = function(){
          /**
         * Display
         */ 
          this.display = new Display('display_'+this.id, {width:250, height:55});  
          this.displayElement = this.display.getWidget() 
          this.view.setDisplay(this.displayElement);
          this.display.setDisplay(0);
      
        /**
        * function buttons
        */
       var fnBtns = this.model.functionBtns;
       var fnBtnArray = [];
       for(var i = 0; i<fnBtns.length;i++){
        var fbtn = new Button('fnBtn_'+this.id+'_'+fnBtns[i],{title:fnBtns[i],value:fnBtns[i],className:'btn btn-danger function'})
        fbtn.onBtnPress = function(key, value){
            _this.functionBtnClickHandler(value);
        };
        fnBtnArray.push(fbtn.getWidget());
       }
       this.view.setFnButtons(fnBtnArray);

       /**
        * number buttons
        */
       
       var nuBtns =  this.model.numericalBtns;
       var nuBtnArray = [];
       var _this = this;
       for(var i = 0; i < nuBtns.length; i++){
        var nbtn =  new Button('nuBtn_'+this.id+'_'+i, {title:nuBtns[i],value:nuBtns[i],className:'btn btn-primary numerical'});
        nbtn.onBtnPress = function(key, value){
            _this.numberBtnClickHandler(value);
        };
        nuBtnArray.push(nbtn.getWidget());
    }
       this.view.setNumberButtons(nuBtnArray)


          /**
        * operation buttons
        */
          var opBtns = this.model.operationBtns;
          var opBtnArray = [];
          for(var i = 0; i<opBtns.length;i++){
          var obtn = new Button('opBtn_'+this.id+'_'+opBtns[i],{title:opBtns[i],value:opBtns[i],className:'btn btn-warning operations'})
          var _this = this;
          obtn.onBtnPress = function(key, value){
           _this.operationBtnClickHandler(value);
          };
          opBtnArray.push(obtn.getWidget()) 
          }
          this.view.setOpButtons(opBtnArray);
    
    }
   /**
    * 
    * @param {*} key 
    */
    this.numberBtnClickHandler = function(key){
        var eq = this.display.getDisplayValue();
        if(eq.substring(0)==0){
            this.display.setDisplay(key);
        } else {
            this.display.setDisplay(eq+=key);
        }
    }
/**
 * 
 * @param {*} key 
 */
    this.operationBtnClickHandler = function(key){
        var eq = this.display.getDisplayValue();
        if(key=='+'){
            eq+=key;
            this.display.setDisplay(eq);
        } else if(key=='-'){
            eq+=key;
            this.display.setDisplay(eq);
        }else if(key=='*'){
            eq+=key;
            this.display.setDisplay(eq);
        } else if(key=='/'){
            eq+=key;
            this.display.setDisplay(eq);
        }else if(key=='='){
            this.calculate();
        }
    }
   /**
    * 
    * @param {*} key 
    */
    this.functionBtnClickHandler = function(key){
        var eq = this.display.getDisplayValue();
        if(key=='AC'){
            this.display.setDisplay(0);
        }else if(key=='DEL'){
            this.display.setDisplay(eq.substring(0,eq.length-1));
        } 
    } 

   /**
    * calculate function
    */
    this.calculate = function(){
        var result = eval(this.display.getDisplayValue());
        this.display.setDisplay(result); 
    }    
     this.init(id, elementId, options)  

}  
