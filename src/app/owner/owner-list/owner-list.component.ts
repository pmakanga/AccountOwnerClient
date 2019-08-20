import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/_interfaces/owner.model';
import { RepositoryService } from 'src/app/_services/repository.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  public owners: Owner[];

  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.getAllOwners()
  }

  public getAllOwners() {
    let apiAddress: string = "api/owner";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.owners = res as Owner[];
    }, error => console.log(error));
  }

}
