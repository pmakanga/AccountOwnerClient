import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/_interfaces/owner.model';
import { RepositoryService } from 'src/app/_services/repository.service';
import { ErrorHandlerService } from 'src/app/_services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-delete',
  templateUrl: './owner-delete.component.html',
  styleUrls: ['./owner-delete.component.css']
})
export class OwnerDeleteComponent implements OnInit {

  public errorMessage: string = '';
  public owner: Owner;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService,
              private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getOwnerById();
  }

  private getOwnerById() {
    let ownerId: string = this.activeRoute.snapshot.params['id'];
    let ownerByIdUrl: string = `api/owner/${ownerId}`;

    this.repository.getData(ownerByIdUrl)
      .subscribe(res => {
        this.owner = res as Owner;
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }

  public redirectToOwnerList() {
    this.router.navigate(['/owner/list']);
  }

  public deleteOwner() {
    let deletUrl: string = `api/owner/${this.owner.id}`;
    this.repository.delete(deletUrl)
      .subscribe(res => {
        $('#successModal').modal()
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }

}
