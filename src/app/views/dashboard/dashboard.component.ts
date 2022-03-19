import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessData } from 'src/app/models/processData';
import { Data, DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  processDataList: ProcessData[] = [];
  filterTerm!: string;

  constructor(private router: Router,
    private customerService: CustomerService,
    private dataService: DataService) { }

  data = [
    {
      CustomerId: 1,
      MachineId: 1,
      MachineNumber: 'UMC-342',
      MachineTypeSerial: 'EWD220;338198304139\n01',
      Process: 'WashDisWash',
      ProcessStartTime: '2019-02-13T21:13:11.328',
      ProcessEndTime: '2019-02-13T22:03:00.327',
      SensorData: 'WaterTemp:celcius:23; Pump10:off; Pump5:on; DrainSensor:off; WaterLevel:ml-432;',
      Online: true,
      OnlineFrom: '2014-07-27T10:02:37',
      OnlineTo: null
    },
    {
      CustomerId: 2,
      MachineId: 2,
      MachineNumber: 'UMC-536J',
      MachineTypeSerial: 'EWD440;481385081010\n1',
      Process: 'WashDis',
      ProcessStartTime: '2019-04-20T20:10:04.129',
      ProcessEndTime: '2019-04-20T21:29:20.734',
      SensorData: 'WaterTemp:celcius:25; Pump10:on; Pump5:off; DrainSensor:off; WaterLevel:ml-382;',
      Online: true,
      OnlineFrom: '2017-09-08T18:12:43',
      OnlineTo: null
    },
    {
      CustomerId: 3,
      MachineId: 3,
      MachineNumber: 'AMC1-32',
      MachineTypeSerial: 'EWD440-\nPT;36849839827301',
      Process: 'Dis',
      ProcessStartTime: '2019-09-12T23:54:12.349',
      ProcessEndTime: '2019-09-12T23:59:14.343',
      SensorData: 'WaterTemp:celcius:22; Pump10:off; Pump5:on; DrainSensor:on; WaterLevel:ml-30;',
      Online: false,
      OnlineFrom: '2016-06-29T16:55:02',
      OnlineTo: null
    }
  ];

  ngOnInit() {
    this.getProcessData();
  }

  getProcessData()
  {
    this.customerService.getProccessData().subscribe(
      (result) => {
        this.processDataList = result.Data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  viewProcess(processData: ProcessData) {
    const data = new Data();
    data.module = 'process-detail';
    data.dataObject = processData;

    this.dataService.onChangeData(data);
    this.router.navigate(['/process-detail']);
  }
}
