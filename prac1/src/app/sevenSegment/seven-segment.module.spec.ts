import { SevenSegmentModule } from './seven-segment.module';

describe('SevenSegmentModule', () => {
  let sevenSegmentModule: SevenSegmentModule;

  beforeEach(() => {
    sevenSegmentModule = new SevenSegmentModule();
  });

  it('should create an instance', () => {
    expect(sevenSegmentModule).toBeTruthy();
  });
});
