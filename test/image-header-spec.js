/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import {expect} from 'chai';
import {getDataView} from './test-utils';
import ImageHeader from '../src/image-header';

describe('image-header', () => {
    it('should fail for too short data buffer', () => {
        const dataView = getDataView('\x00');
        expect(() => ImageHeader.check(dataView)).to.throw(/Invalid image format/);
    });

    it('should fail for invalid image format', () => {
        const dataView = getDataView('------------');
        expect(() => ImageHeader.check(dataView)).to.throw(/Invalid image format/);
    });

    it('should accept well-formed header of JPEG image data', () => {
        const dataView = getDataView('\xff\xd8\xff\xe100Exif\x00\x00');
        expect(() => ImageHeader.check(dataView)).to.not.throw();
    });

    it('should find no tags when there are no markers', () => {
        const dataView = getDataView('\xff\xd8----------');
        const appMarkerValues = ImageHeader.parseAppMarkers(dataView);
        expect(appMarkerValues).to.deep.equal({
            hasAppMarkers: false,
            tiffHeaderOffset: undefined,
            iptcDataOffset: undefined,
            xmpDataOffset: undefined,
            xmpFieldLength: undefined
        });
    });

    it('should find no tags when there is no Exif identifier for APP1', () => {
        const dataView = getDataView('\xff\xd8\xff\xe1--------');
        const appMarkerValues = ImageHeader.parseAppMarkers(dataView);
        expect(appMarkerValues).to.deep.equal({
            hasAppMarkers: true,
            tiffHeaderOffset: undefined,
            iptcDataOffset: undefined,
            xmpDataOffset: undefined,
            xmpFieldLength: undefined
        });
    });

    it('should find no tags for faulty APP markers', () => {
        const dataView = getDataView('\xff\xd8\xfe\xdc\x00\x6fJFIF\x65\x01\x01\x01\x00\x48');
        const appMarkerValues = ImageHeader.parseAppMarkers(dataView);
        expect(appMarkerValues).to.deep.equal({
            hasAppMarkers: false,
            tiffHeaderOffset: undefined,
            iptcDataOffset: undefined,
            xmpDataOffset: undefined,
            xmpFieldLength: undefined
        });
    });

    it('should handle APP2 markers', () => {
        const dataView = getDataView('\xff\xd8\xff\xe0\x00\x07JFIF\x00\xff\xe2\x00\x07XXXX\x00\xff\xe0\x00\x07JFXX\x00\xff\xe1\x47\x11Exif\x00\x00');
        const {tiffHeaderOffset} = ImageHeader.parseAppMarkers(dataView);
        expect(tiffHeaderOffset).to.equal(39);
    });

    it('should handle JFIF APP0 markers', () => {
        const dataView = getDataView('\xff\xd8\xff\xe0\x00\x07JFIF\x00\xff\xe1\x47\x11Exif\x00\x00');
        const {tiffHeaderOffset} = ImageHeader.parseAppMarkers(dataView);
        expect(tiffHeaderOffset).to.equal(21);
    });

    it('should handle JFXX APP0 markers', () => {
        const dataView = getDataView('\xff\xd8\xff\xe0\x00\x07JFIF\x00\xff\xe0\x00\x07JFXX\x00\xff\xe1\x47\x11Exif\x00\x00');
        const {tiffHeaderOffset} = ImageHeader.parseAppMarkers(dataView);
        expect(tiffHeaderOffset).to.equal(30);
    });

    it('should handle unknown high ID APP markers', () => {
        const dataView = getDataView('\xff\xd8\xff\xea\x00\x07XXXX\x00\xff\xe1\x47\x11Exif\x00\x00');
        const {tiffHeaderOffset} = ImageHeader.parseAppMarkers(dataView);
        expect(tiffHeaderOffset).to.equal(21);
    });

    it('should handle reversed order of JFIF-Exif hybrid', () => {
        const dataView = getDataView('\xff\xd8\xff\xe1\x00\x08Exif\x00\x00\xff\xe0\x00\x07JFIF\x00');
        const {tiffHeaderOffset} = ImageHeader.parseAppMarkers(dataView);
        expect(tiffHeaderOffset).to.equal(12);
    });

    it('should recognize IPTC data', () => {
        const dataView = getDataView('\xff\xd8\xff\xed\x00\x10Photoshop 3.0\x00');
        const {iptcDataOffset} = ImageHeader.parseAppMarkers(dataView);
        expect(iptcDataOffset).to.equal(20);
    });

    it('should handle IPTC Comment markers', () => {
        const dataView = getDataView('\xff\xd8\xff\xe0\x00\x07JFIF\x00\xff\xfe\x00\x2bOptimized by JPEGmin\x00');
        const {hasAppMarkers} = ImageHeader.parseAppMarkers(dataView);
        expect(hasAppMarkers).to.be.true;
    });

    it('should recognize IPTC XMP data', () => {
        const dataView = getDataView('\xff\xd8\xff\xe1\x00\x1fhttp://ns.adobe.com/xap/1.0/\x00');
        const {xmpDataOffset} = ImageHeader.parseAppMarkers(dataView);
        expect(xmpDataOffset).to.equal(35);
    });

    it('should report correct size for IPTC XMP metadata', () => {
        const dataView = getDataView('\xff\xd8\xff\xe1\x00\x49http://ns.adobe.com/xap/1.0/\x00');
        const {xmpFieldLength} = ImageHeader.parseAppMarkers(dataView);
        expect(xmpFieldLength).to.equal(42);
    });
});
