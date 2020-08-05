import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "progressbar-page",
    templateUrl: "progressbar-page.html",
	styleUrls : ["./progressbar-page.css"],
    moduleId: module.id
	
})


export class progressbarpage{
    public constructor(private router: Router){
    }
	path="";
    Completion="";
    percent=0;
    public ngOnInit() :void {
        this.path= knownFolders.currentApp().path+"//images//test.jpg";
     }
    message='';
    onProgressLoaded(event) {
        event.object.color = "red";
        event.object.backgroundColor = "blue";
      }
    setPercentageText(per){
        this.Completion= "Percentage Completed :"+per;
    }
    username;
    password;
    uploadFile(args: EventData) {
        var metadata = {
            contentType: "demo/test",
            contentLanguage: "fr",
            customMetadata: {
              "foo": "bar",
               "foo2": "bar2"
            }
          };
        const appPath = knownFolders.currentApp().path;
        // The path to he file  we want to upload (this one is in `app/images`)
        const logoPath = appPath+"//images//test.jpg";

        // Upload the file with the options below:
        storage.uploadFile({
            // optional, can also be passed during init() as 'storageBucket' param so we can cache it (find the URL in the Firebase console)
            bucket:  "gs://hri7238.appspot.com",
            // the full path of the file in your Firebase storage (folders will automatically be created)
            remoteFullPath: 'uploads/images/firebase-storage.png',
            // option 1: a file-system module File object
            localFile: File.fromPath(logoPath),
            // option 2: a full file path (ignored if 'localFile' is set)
            localFullPath: logoPath,
            // get notified of file upload progress
            onProgress: status => {
                console.log("Uploaded fraction: " + status.fractionCompleted);
                this.percent=status.percentageCompleted.valueOf();
                console.log("Percentage complete: " + status.percentageCompleted);
            },metadata
        }).then(uploadedFile => {
            console.log("File uploaded: " + JSON.stringify(uploadedFile));
            this.message = "File uploaded: " + JSON.stringify(uploadedFile);
        }).catch(err => {
            console.log(err);
        })
    }
}
