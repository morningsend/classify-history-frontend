class UploadFile extends React.Component{

    constructor(props){
        super(props)
        this.state = {txt:''}
        this.update = this.update.bind(this)
        this.backend = new Backend( "http://localhost:8080" );
    }
    onDrop (files) {
      console.log('Received files: ', files);
    }
    update(e){
        this.setState({txt:e.target.value})
    }
    render(){
        var componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            //postUrl: '/uploadHandler'
            postUrl: this.backend.getImageUploadURL()
            // Notice how there's no postUrl set here
        };
        var djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif"
        };
        var callbackArray = [
            function () {
                console.log('Look Ma, I\'m a callback in an array!');
            },
            function () {
                console.log('Wooooow!');
            }
        ];
        var eventHandlers = {
            // All of these receive the event as first parameter:
            drop: callbackArray,
            dragstart: null,
            dragend: null,
            dragenter: null,
            dragover: null,
            dragleave: null,
            // All of these receive the file as first parameter:
            addedfile: simpleCallBack,
            removedfile: null,
            thumbnail: null,
            error: null,
            processing: null,
            uploadprogress: null,
            sending: null,
            success: null,
            complete: null,
            canceled: null,
            maxfilesreached: null,
            maxfilesexceeded: null,
            // All of these receive a list of files as first parameter
            // and are only called if the uploadMultiple option
            // in djsConfig is true:
            processingmultiple: null,
            sendingmultiple: null,
            successmultiple: null,
            completemultiple: null,
            canceledmultiple: null,
            // Special Events
            totaluploadprogress: null,
            reset: null,
            queuecompleted: null
        }
        var simpleCallBack = function () {
            console.log('I\'m a simple callback');
        };

        return<div {...this.props}>
            {/* <DropzoneComponent onDrop={this.onDrop}>
               <div>Try dropping some files here, or click to select files to upload.</div>
             </Dropzone>*/}
            <DropzoneComponent config={componentConfig}
            djsConfig = {djsConfig} eventHandlers = {eventHandlers}
                    />
          </div>
    }
}
// stateless child
const UploadCanvas = (props) =>{
    return <div>
               <input type = "text"
               onChange = {props.update} />
               <h1>{props.txt}</h1>
          </div>
}