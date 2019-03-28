import { TestWindow } from '@stencil/core/testing';
import { OckQRCode } from './ock-qrcode';

describe('ock-qrcode', () => {
  it('should build', () => {
    expect(new OckQRCode()).toBeTruthy();
  });

  describe('rendering', () => {
    let window;
    let element;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [OckQRCode],
        html: '<ock-qrcode></ock-qrcode>'
      });
    });

    it ('should work without params', async () => {
      await window.flush();
    });

    it ('should work only with address', async () => {
      element.address = 'DLteVA8j6B5DLpFp2Z3XSw1ENGXMjtFQsf';
      await window.flush();
    })

    it ('should work vendor-field without special characters', async () => {
      element.vendorField = 'Hello';
      await window.flush();
    });

    it('should work vendor-field with special characters', async () => {
      element.vendorField = 'Hello%20Ock!';
      await window.flush();
    });

  })
})
