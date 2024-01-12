/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const NODES = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
] as const;

type PrimitivePropsWithRef<E extends React.ElementType> = React.ComponentPropsWithRef<E>;
interface PrimitiveForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}
type Primitives = { [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E> };

export const Primitive = NODES.reduce((primitive, node) => {
  const Node = React.forwardRef((props: PrimitivePropsWithRef<typeof node>, forwardedRef: any) => {
    const { ...primitiveProps } = props;
    const Comp: any = node;

    return <Comp {...primitiveProps} ref={forwardedRef} />;
  });

  Node.displayName = `Primitive.${node}`;

  return { ...primitive, [node]: Node };
}, {} as Primitives);
