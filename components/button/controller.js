function Button (id, options){
    this.init =  function(id, options){
        this.model = new ButtonModel(id, options);
        this.view =  new ButtonView(id, options); 
        this.id = id;
        this.options = options; 
        this.widgetElement = this.view.getWidget()
        this._setEvents()
    }

    /**
     * 
     */
    this._setEvents = function(){
        var _this = this;
        
        _this.widgetElement.onclick = function(){ 
            _this.onBtnPress(_this.id, _this.options.value);
        }  
    } 

    /**
     * 
     */
    this.onBtnPress = function(id, value){
        console.log("id", id, value)
    }

     /**
     * 
     * @returns widget element
     */
     this.getWidget = function(){
        return this.widgetElement
    }

    this.init(id, options);
}
