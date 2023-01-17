import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {
  fragment: string;

  @Input() sidebarId: string = 'sidebar';

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private classToggler: ClassToggleService
  ) {
    super();
  }
  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }
}
