import { render } from '@testing-library/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.';
import { describe } from 'node:test';

const CONTENT_TEXT = 'content description';

describe('Accordion', () => {
  it('Accordion은 다음과 같은 구성을 가져야 한다.', () => {
    const content = render(
      <Accordion>
        <AccordionItem value={'jest'}>
          <AccordionTrigger>jest title 1</AccordionTrigger>
          <AccordionContent>{CONTENT_TEXT}</AccordionContent>
        </AccordionItem>
        <AccordionItem value={'vite'}>
          <AccordionTrigger>vite title 1</AccordionTrigger>
          <AccordionContent>{CONTENT_TEXT}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(content.container).toMatchInlineSnapshot(`
      <div>
        <div
          id="accordion"
        >
          <div
            class="overflow-hidden first:rounded-t-xl last:rounded-b-xl"
            id="accordion-item"
          >
            <div
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right focus:ring-4 px-6c py-3c bg-primary3 hover:bg-primary2 text-gray13"
            >
              jest title 1
            </div>
            <div
              class="animate-collapsed-up overflow-hidden bg-gray10 dark:bg-gray6"
              style="--content-height: 0px;"
            >
              <div
                class="border-b-0 px-6c py-3c"
              >
                content description
              </div>
            </div>
          </div>
          <div
            class="overflow-hidden first:rounded-t-xl last:rounded-b-xl"
            id="accordion-item"
          >
            <div
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right focus:ring-4 px-6c py-3c bg-primary3 hover:bg-primary2 text-gray13"
            >
              vite title 1
            </div>
            <div
              class="animate-collapsed-up overflow-hidden bg-gray10 dark:bg-gray6"
              style="--content-height: 0px;"
            >
              <div
                class="border-b-0 px-6c py-3c"
              >
                content description
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
