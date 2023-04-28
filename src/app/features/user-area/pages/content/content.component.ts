import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DocumentItem } from '@interfaces/document.interface';
import { DocumentService } from '@services/document.service';
import { Title } from '@angular/platform-browser';
import { environment } from '@env/environment';
import { openDocumentInEditor } from '../../shared/utils/window.utils';

@Component({
  selector: 'tk-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  classes$ = new Observable<DocumentItem[]>();

  constructor(
    private _documentService: DocumentService,
    private _title: Title
  ) {
    this._title.setTitle(`${environment.baseTabTitle} - Conteúdo`);
  }

  ngOnInit(): void {
    this.classes$ = this._documentService.getDocuments();
  }

  onClassClick(event: DocumentItem): void {
    openDocumentInEditor(event.id);
  }
}
