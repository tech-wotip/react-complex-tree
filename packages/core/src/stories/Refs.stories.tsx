import { Meta } from '@storybook/react';
import { UncontrolledTreeEnvironment } from '../uncontrolledEnvironment/UncontrolledTreeEnvironment';
import { StaticTreeDataProvider } from '../uncontrolledEnvironment/StaticTreeDataProvider';
import { Tree } from '../tree/Tree';
import React, { useEffect, useRef } from 'react';
import { longTree } from './utils/treeData.stories';
import { TreeContextProps, TreeEnvironmentContextProps, TreeEnvironmentRef, TreeRef } from '../types';

export default {
  title: 'React Refs',
} as Meta;

export const ControlTreeExternally = () => {
  const treeEnvironment = useRef<TreeEnvironmentRef>(null);
  const tree = useRef<TreeRef>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (treeEnvironment.current && tree.current) {
        const linearItems = tree.current.treeContext.getItemsLinearly();
        const focusItem = treeEnvironment.current.viewState[tree.current.treeId]!.focusedItem ?? linearItems[0].item;

        if (!treeEnvironment.current.viewState[tree.current.treeId]!.expandedItems?.includes(focusItem)) {
          tree.current.expandItem(focusItem);
          return;
        }

        tree.current.moveFocusDown();
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <UncontrolledTreeEnvironment<string>
      ref={treeEnvironment}
      allowDragAndDrop={true}
      allowDropOnItemWithChildren={true}
      allowReorderingItems={true}
      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({...item, data}))}
      getItemTitle={item => item.data}
      viewState={{
      }}
    >
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" ref={tree} />
    </UncontrolledTreeEnvironment>
  );
};