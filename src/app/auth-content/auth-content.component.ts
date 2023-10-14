/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent {
  data: any;

  constructor(private axiosService: AxiosService) {
    this.axiosService.request(
      "GET", "/messages", {}
    ).then((response) => {
      this.data = response.data;
    })
  }
}
