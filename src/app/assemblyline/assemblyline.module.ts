import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AssemblyLineComponent } from "./assemblyline.component";

@NgModule({
  declarations: [AssemblyLineComponent],
  imports: [CommonModule,FormsModule],
  providers: [],
  exports: [AssemblyLineComponent]
})
export class AssemblyLineModule {}
