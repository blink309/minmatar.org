import { describe, expect, it } from 'vitest'

import { moon_choice_label } from '@helpers/universe_moon_label'
import { ui } from '@i18n/ui'

const keys = [
    'universe.report.moon',
    'universe.report.moon_hint',
    'universe.report.moon_none',
    'universe.report.moon_none_in_system',
    'universe.report.moon_locked',
]

describe('moon_choice_label', () => {
    it('joins the system, planet and moon number', () => {
        expect(moon_choice_label('Amamake', 'VII', 1)).toBe('Amamake VII-1')
        expect(moon_choice_label('Auga', 'III', 12)).toBe('Auga III-12')
    })
})

describe('Metenox moon picker copy', () => {
    it('has a string for every label the report dialog shows', () => {
        for (const key of keys)
            expect(ui.en[key as keyof typeof ui.en]).toEqual(expect.any(String))
    })
})
