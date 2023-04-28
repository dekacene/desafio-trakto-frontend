import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DocumentItem } from '@interfaces/document.interface';
import { DocumentService } from '@services/document.service';
import { environment } from '@env/environment';
import { youtubeVideosMock } from './mocks/youtube-videos.mock';
import { YouTubeClass } from '../../interfaces/mocks.interface';
import { openDocumentInEditor } from '../../shared/utils/window.utils';

@Component({
  selector: 'tk-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  documents$ = new Observable<DocumentItem[]>();
  youtubeDocuments$ = new Observable<YouTubeClass[]>();

  constructor(
    private _documentService: DocumentService,
    private _router: Router,
    private _title: Title
  ) {
    this._title.setTitle(`${environment.baseTabTitle} - Dashboard`);
  }

  ngOnInit(): void {
    this.documents$ = this._documentService.getDocuments({
      order_by: 'updated_at',
      total_per_page: 10,
    });

    this.youtubeDocuments$ = this.#setYouTubeDocuments();
  }

  goToAllContent(): void {
    this._router.navigate(['/u', 'content']);
  }

  onCardClicked(document: DocumentItem): void {
    openDocumentInEditor(document.id);
  }

  #setYouTubeDocuments(): Observable<YouTubeClass[]> {
    return of(youtubeVideosMock).pipe(delay(1200));
  }
}
