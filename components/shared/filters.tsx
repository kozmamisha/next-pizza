import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      {/* Checkboxes upside */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Сan assemble" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      {/* Prices filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" min={0} max={1000} placeholder="0" defaultValue={0} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Garlic',
            value: '2',
          },
          {
            text: 'Cucumber',
            value: '3',
          },
          {
            text: 'Red onion',
            value: '4',
          },
          {
            text: 'Tomato',
            value: '5',
          },
          {
            text: 'Mozarella',
            value: '6',
          },
        ]}
        items={[
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Garlic',
            value: '2',
          },
          {
            text: 'Cucumber',
            value: '3',
          },
          {
            text: 'Red onion',
            value: '4',
          },
          {
            text: 'Tomato',
            value: '5',
          },
          {
            text: 'Mozarella',
            value: '6',
          },
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Garlic',
            value: '2',
          },
          {
            text: 'Cucumber',
            value: '3',
          },
          {
            text: 'Red onion',
            value: '4',
          },
          {
            text: 'Tomato',
            value: '5',
          },
          {
            text: 'Mozarella',
            value: '6',
          },
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Garlic',
            value: '2',
          },
          {
            text: 'Cucumber',
            value: '3',
          },
          {
            text: 'Red onion',
            value: '4',
          },
          {
            text: 'Tomato',
            value: '5',
          },
          {
            text: 'Mozarella',
            value: '6',
          },
        ]}
      />
    </div>
  );
};
