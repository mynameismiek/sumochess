import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CognitoUtil } from './cognito.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

/**
 * Created by Vladimir Budilov
 */

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor(public cognitoUtil: CognitoUtil) {
  }

  private getS3(): any {
    AWS.config.update({
      region: environment.s3.bucketRegion,
    });
    const clientParams: any = {
      region: environment.s3.bucketRegion,
      apiVersion: '2006-03-01',
      params: { Bucket: environment.s3.rekognitionBucket }
    };
    if (environment.s3.endpoint) {
      clientParams.endpoint = environment.s3.endpoint;
    }
    return new S3(clientParams);
  }

  public addPhoto(selectedFile): boolean {
    if (!selectedFile) {
      console.log('Please choose a file to upload first.');
      return;
    }
    const fileName = selectedFile.name;
    const albumPhotosKey = environment.s3.albumName + '/' + this.cognitoUtil.getCognitoIdentity() + '/';
    const photoKey = albumPhotosKey + fileName;

    this.getS3().upload({
      Key: photoKey,
      ContentType: selectedFile.type,
      Body: selectedFile,
      StorageClass: 'STANDARD',
      ACL: 'private'
    }, function (err, data) {
      if (err) {
        console.log('There was an error uploading your photo: ', err);
        return false;
      }
      console.log('Successfully uploaded photo.');
      return true;
    });
  }

  public deletePhoto(albumName, photoKey) {
    this.getS3().deleteObject({ Key: photoKey }, function (err, data) {
      if (err) {
        console.log('There was an error deleting your photo: ', err.message);
        return;
      }
      console.log('Successfully deleted photo.');
    });
  }

  public viewAlbum(albumName) {
    const albumPhotosKey = encodeURIComponent(environment.s3.albumName) + '//';
    this.getS3().listObjects({ Prefix: albumPhotosKey }, function (err, data) {
      if (err) {
        console.log('There was an error viewing your album: ' + err);
      }
    });
  }
}
