import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DocumentUploadService } from './document-upload.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formData = {
    companyName: '',
    prompt: '',
    document: ''
  };

  constructor(private documentUploadService: DocumentUploadService) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file); // Ensure the file is read as base64
    reader.onload = () => {
      this.formData.document = (reader.result as string).split(',')[1]; // Extract base64 content
    };
  }

  onSubmit() {
    this.documentUploadService.uploadDocument(this.formData).subscribe(response => {
      console.log('Upload successful', response);
      alert("Upload successful");
    }, error => {
      console.error('Upload failed', error);
    });
  }
}
