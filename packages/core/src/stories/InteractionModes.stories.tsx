import { Meta } from '@storybook/react';
import { UncontrolledTreeEnvironment } from '../uncontrolledEnvironment/UncontrolledTreeEnvironment';
import { StaticTreeDataProvider } from '../uncontrolledEnvironment/StaticTreeDataProvider';
import { Tree } from '../tree/Tree';
import React from 'react';
import { longTree } from 'demodata';
import { InteractionMode } from '../types';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core/Interaction Modes',
} as Meta;

export const ClickItemToExpandInteractionMode = () => (
  <UncontrolledTreeEnvironment<string>
    canDragAndDrop={true}
    canDropOnItemWithChildren={true}
    canReorderItems={true}
    dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}
    getItemTitle={item => item.data}
    defaultInteractionMode={InteractionMode.ClickItemToExpand}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts'],
      },
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);

export const DoubleClickItemToExpandInteractionMode = () => (
  <UncontrolledTreeEnvironment<string>
    canDragAndDrop={true}
    canDropOnItemWithChildren={true}
    canReorderItems={true}
    dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}
    getItemTitle={item => item.data}
    defaultInteractionMode={InteractionMode.DoubleClickItemToExpand}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts'],
      },
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);

export const ClickArrowToExpandInteractionMode = () => (
  <UncontrolledTreeEnvironment<string>
    canDragAndDrop={true}
    canDropOnItemWithChildren={true}
    canReorderItems={true}
    dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}
    getItemTitle={item => item.data}
    defaultInteractionMode={InteractionMode.ClickArrowToExpand}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts'],
      },
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);

export const CustomInteractionMode = () => (
  <UncontrolledTreeEnvironment<string>
    dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}
    getItemTitle={item => item.data}
    defaultInteractionMode={{
      mode: 'custom',
      createInteractiveElementProps: (item, treeId, actions, renderFlags) => ({
        onClick: e => {
          actions.focusItem();
        },
        onFocus: () => {
          actions.focusItem();
        },
        draggable: renderFlags.canDrag && !renderFlags.isRenaming,
        tabIndex: !renderFlags.isRenaming ? (renderFlags.isFocused ? 0 : -1) : undefined,
      }),
    }}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts'],
      },
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);

export const CustomExtendingInteractionMode = () => (
  <UncontrolledTreeEnvironment<string>
    dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}
    getItemTitle={item => item.data}
    defaultInteractionMode={{
      mode: 'custom',
      extends: InteractionMode.DoubleClickItemToExpand,
      createInteractiveElementProps: (item, treeId, actions, renderFlags) => ({
        onMouseOver: () => {
          document
            .querySelectorAll(`[data-rct-tree="tree-5"] [data-rct-item-id]`)
            .forEach(element => ((element as any).style.background = 'transparent'));
          (
            document.querySelector(`[data-rct-tree="tree-5"]  [data-rct-item-id="${item.index}"]`) as any
          ).style.background = 'red';
        },
      }),
    }}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts'],
      },
    }}
  >
    <>
      <p>This interaction mode extends the "Double Click Item To Expand" mode, but adds a mouse hover effect.</p>
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
    </>
  </UncontrolledTreeEnvironment>
);
