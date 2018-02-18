import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { DataStoreService } from "../services/data-store.service";

@Injectable()
export class TeamCheckGuard implements CanActivate {
  constructor(
    private router: Router,
    private dataStoreService: DataStoreService
  ) {}

  public canActivate() {
    if (this.dataStoreService.teamSize) {
      return true;
    } else {
      this.router.navigate(["/"]);
    }
    return false;
  }
}
