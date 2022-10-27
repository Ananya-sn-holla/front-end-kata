import { Component, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { Items } from "../app.model";

@Component({
  selector: "assemblyline",
  templateUrl: "./assemblyline.component.html",
  styleUrls: ["./assemblyline.component.scss"]
})
export class AssemblyLineComponent implements OnChanges {
  @Input() stages: string[];
  @ViewChild('itemInput') inputItem;

  items: Items = {};
  enteredText: string;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes.stages) {
      this.initializeItems();
    }
  }

  onEnter(){
    this.inputItem.nativeElement.value = '';
    this.items[this.stages[0]].unshift(this.enteredText);
    this.enteredText = '';
    
  }

  initializeItems() {
    this.stages.forEach((stage: string) => this.items[stage] = []);
  }

  onItemClick(stageIndex: number,itemIndex:number) {
    const stage: string = this.stages[stageIndex];
    const clickedItem: string = this.items[stage][itemIndex];
    this.items[stage].splice(itemIndex,1);
    if(stageIndex !== this.stages.length - 1) {
      this.items[this.stages[stageIndex +1]].unshift(clickedItem);
    }
  }

  onRightClick(stageIndex: number,itemIndex:number, event) {
    event.preventDefault();
    const stage: string = this.stages[stageIndex];
    const clickedItem: string = this.items[stage][itemIndex];
    this.items[stage].splice(itemIndex,1);
    if(stageIndex !== 0) {
      this.items[this.stages[stageIndex - 1]].push(clickedItem);
    }
  }
}
