import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
// import { GoogleApis } from 'googleapis/build/src'
declare var $: any;
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  title = 'easyfullcalendar';
  ngOnInit(){
        setTimeout(() => {
          $("#calendar").fullCalendar({
                          header: {
                              left   : 'title',
                              center : 'month,agendaWeek,agendaDay',
                              right  : 'prev,next today'
                          },
                          navLinks   : true,
                          editable   : true,
                          eventLimit : true,
                          events: [
                              {
                                  title : 'This is your',
                                  start : '2019-03-03T12:30:00',
                                  color : '#f9c66a' // override!
                              },
                              {
                                  title : 'Your meeting with john',
                                  start : '2019-03-07T12:30:00',
                                  end   : '2019-03-09',
                                  color : "#019efb"
                              },
                              {
                                  title  : 'This is Today',
                                  start  : '2019-03-12T12:30:00',
                                  allDay : false, // will make the time show,
                                  color  : "#57cd5f"
                              }
                          ],  // request to load current events
                      });
      }, 100);
    }
}
