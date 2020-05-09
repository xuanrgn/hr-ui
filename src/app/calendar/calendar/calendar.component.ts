import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
// import { GoogleApis } from 'googleapis/build/src'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dataSource: any;
  currentDate: Date = new Date(2017, 4, 25);



  constructor( private http: HttpClient) {
    this.dataSource = new DataSource({
        store: new CustomStore({
            load: (options) => this.getData(options, { showDeleted: false })
        })
    });
  //  console.log("User",this.authService.getSocialUser)
  }

  private getData(options: any, requestOptions: any) {
    let PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k',
        CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';
    let dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
            CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

    return this.http.get(dataUrl, requestOptions).toPromise().then((data: any) => data.items);
  }

  // listEvents(auth) {
  //   const calendar = this.google.calendar({version: 'v3', auth});
  //   calendar.events.list({
  //     calendarId: 'primary',
  //     timeMin: (new Date()).toISOString(),
  //     maxResults: 10,
  //     singleEvents: true,
  //     orderBy: 'startTime',
  //   }, (err, res) => {
  //     if (err) return console.log('The API returned an error: ' + err);
  //     const events = res.data.items;
  //     if (events.length) {
  //       console.log('Upcoming 10 events:');
  //       events.map((event, i) => {
  //         const start = event.start.dateTime || event.start.date;
  //         console.log(`${start} - ${event.summary}`);
  //       });
  //     } else {
  //       console.log('No upcoming events found.');
  //     }
  //   });
  // }

  ngOnInit() {
  }

}
