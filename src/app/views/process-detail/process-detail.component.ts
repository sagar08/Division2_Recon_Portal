import { ProcessData } from './../../models/processData';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})
export class ProcessDetailComponent implements OnInit {

  processData: ProcessData | null = null;

  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentData.subscribe(data => {
      if (data.module === 'process-detail') {
        this.processData = data.dataObject;
      }
    });
  }


  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
