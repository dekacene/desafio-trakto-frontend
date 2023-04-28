import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { Observable } from 'rxjs';

import { DocumentItem } from '@interfaces/document.interface';
import { YouTubeClass } from '../../../../interfaces/mocks.interface';
import { openDocumentInEditor } from '../../../../shared/utils/window.utils';

@Component({
  selector: 'tk-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input() classes$: Observable<DocumentItem[]>;
  @Input() videos$: Observable<YouTubeClass[]>;
  @Input() title: string;
  @Input() subtitle: string;

  isLoading = true;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _router: Router
  ) {}

  ngOnInit() {
    const classList = this._document.querySelector('.class-list');

    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      // 1 é por causa do spinner
      if (mutations && mutations.length > 1) {
        this.isLoading = false;
      }
    });

    observer.observe(classList, { childList: true });
  }

  onClassClick(event: DocumentItem): void {
    openDocumentInEditor(event.id);
  }

  onBtnClick(): void {
    this._router.navigate(['/u', 'content']);
  }
}
