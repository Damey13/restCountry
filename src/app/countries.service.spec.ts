import { TestBed } from "@angular/core/testing";

import { countriesService } from "./countries.service";

describe("countriesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: countriesService = TestBed.get(countriesService);
    expect(service).toBeTruthy();
  });
});
