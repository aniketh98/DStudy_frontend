import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  componentToShow = 'welcome';
  constructor(private axiosService: AxiosService) {}

  showComponent(comopnentToShow: string) {
    this.componentToShow = comopnentToShow;
  }
  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then((response) => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = 'messages';
    });
  }

  onRegister(input: any): void {
      this.axiosService.request(
        "POST",
        '/register',
        {
          firstName: input.firstName,
          lastName: input.lastName,
          login: input.login,
          password: input.password
        }
      ).then((response) => {
        this.axiosService.setAuthToken(response.data.token);
        this.componentToShow = 'messages';
      });
  }
}
