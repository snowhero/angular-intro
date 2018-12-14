import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AmiiboService } from '../services/amiibo.service';
import { AmiiboInterface } from '../interfaces/amiibo-interface';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  amiibos: AmiiboInterface[];
  paginator: any = {};
  pagedItems: AmiiboInterface[] = [];
  searchText: string;
  shouldShowPaginator = true;

  constructor(private amiiboService: AmiiboService, private paginationService: PaginationService, private route: ActivatedRoute) { }

  getAmiibos() {
    this.route.params.subscribe( params => {
      if(params.category) {
        this.amiiboService.getFilteredAmiibos(params.category, params.value).subscribe( (amiibos) => {
        this.amiibos = amiibos.amiibo;
        this.setPage(1);
        });
      } 
      else {
        this.amiiboService.getAmiibos().subscribe((res) => {
        this.amiibos = res.amiibo;
        this.setPage(1);
        });
      }
    }); 
  }

  setPage(page: number) {
    if(page < 1 || this.paginator.totalPages) { return }
    const amiiboCount = this.amiibos.length;
    this.paginator = this.paginationService.getPagination(amiiboCount, page, 12);
    const startIndex = this.paginator.startIndex;
    const endIndex = this.paginator.endIndex + 1;
    this.pagedItems = this.amiibos.slice(this.paginator.startIndex, endIndex);
    }
  
  setAmiibos(): AmiiboInterface[] {
    if(!this.searchText) {
      this.shouldShowPaginator = true;
      return this.pagedItems;
    }
    this.shouldShowPaginator = false;
    return this.amiibos;
  }

  ngOnInit() {
    this.getAmiibos();
  }

}
