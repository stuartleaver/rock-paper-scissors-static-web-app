import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ComputerPlayerService } from './computer-player.service';

describe('ComputerPlayerService', () => {
  let service: ComputerPlayerService;
  let httpMock: HttpTestingController;

  let mockOpponentPlayerChoice = 2;
  let mockOpponentPlayerName = "Kayla Wiza";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ComputerPlayerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 

  it('getItemsList() should return data', () => {
    service.getComputerPlayerChoice().subscribe((res) => {
      expect(res).toEqual(2);
    });

    const req = httpMock.expectOne('/api/rockpaperscissors');
    expect(req.request.method).toBe('GET');
    req.flush(mockOpponentPlayerChoice);
  });
});
