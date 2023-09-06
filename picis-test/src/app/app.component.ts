import { Component } from '@angular/core';
import { Hospital, Room, ICURoom, WaitingRoom, RegularRoom, ORRoom, loadData, getTimeIn24HourFormat, DiagnosticRoom } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'picis-test';

  hospital: Hospital = loadData();
  displayedColumns: string[] = ['id','code','floor', 'roomNumber', 'room-type', 'extra-info'];

  constructor() { }

  getRoomType(room: Room): string {
    if (room instanceof ICURoom) {
      return "ICU";
    } else if (room instanceof WaitingRoom) {
      return "Waiting";
    } else if (room instanceof RegularRoom) {
      return "Regular";
    } else if (room instanceof ORRoom) {
      return "OR";
    } else if (room instanceof DiagnosticRoom){
      return "DR"
    }else {
      return "Unknown";
    }
  }

  getExtraInfo(room: Room): string{
    if (room instanceof ICURoom) {
      return room.icuType;
    } else if (room instanceof WaitingRoom) {
      return room.capacity.toString();
    } else if (room instanceof RegularRoom) {
      return room.beds.toString();
    } else if (room instanceof ORRoom) {
      // show start and end time in 24 hour format
      return `${getTimeIn24HourFormat(room.startTime)} - ${getTimeIn24HourFormat(room.endTime)}`;
    } else if(room instanceof DiagnosticRoom){
      return room.diagnosticType;
    } else {
      return "Unknown";
    }
  }
}
