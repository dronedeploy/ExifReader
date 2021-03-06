/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import {expect} from 'chai';
import TagNamesInteroperabilityIfd from '../src/tag-names-interoperability-ifd';

describe('tag-names-interoperability-ifd', () => {
    it('should have tag InteroperabilityIndex', () => {
        expect(TagNamesInteroperabilityIfd[0x0001]).to.equal('InteroperabilityIndex');
    });
});
