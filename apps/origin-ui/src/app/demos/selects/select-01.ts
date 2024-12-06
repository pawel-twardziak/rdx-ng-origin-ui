import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSelectNative } from '@origin-ui/components/select-native';

@Component({
    selector: 'demo-select-01',
    standalone: true,
    imports: [OriSelectNative, OriLabel],
    template: `
        <div class="flex flex-col gap-2">
            <ori-label [htmlFor]="'select-01'">Simple select (native)</ori-label>
            <ori-select-native [id]="'select-01'">
                <option value="s1">React</option>
                <option value="s2">Next.js</option>
                <option value="s3">Astro</option>
                <option value="s4">Gatsby</option>
            </ori-select-native>
        </div>
    `
})
export default class Select01Component {}
