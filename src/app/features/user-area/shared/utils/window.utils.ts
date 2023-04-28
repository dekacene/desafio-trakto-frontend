import { environment } from '@env/environment';

export function openDocumentInEditor(documentId: string): void {
  window.open(`${environment.editorUrl}/${documentId}`, '_blank');
}
