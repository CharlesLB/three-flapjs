import { ILink, INode } from '@/@types/components/Automaton';

const nodeCanvasObject = (node: INode, ctx: CanvasRenderingContext2D, globalScale: number) => {
  const label = `${node?.name}`;
  const fontSize = 12 / globalScale;
  ctx.font = `${fontSize}px Sans-Serif`;

  ctx.fillStyle = 'rgba(255, 255, 255)';

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = node.color || '#000';
  ctx.fillText(label, node?.x || 0, node?.y || 0);
};

const linkCanvasObject = (link: ILink, ctx: CanvasRenderingContext2D, globalScale: number, nodes: INode[]) => {
  const isSelfLoop = link.source === link.target;

  const label = `${link?.name}`;
  const start = typeof link.source === 'string' || typeof link.source === 'number' ? nodes[Number(link.source)] : link.source;
  const end = typeof link.target === 'string' || typeof link.target === 'number' ? nodes[Number(link.target)] : link.target;

  const textPos = isSelfLoop
    ? {
        x: (start?.x || 0) + 22,
        y: (start?.y || 0) - 22
      }
    : Object.assign(
        // @ts-ignore
        ...['x', 'y'].map((c) => ({
          // @ts-ignore
          [c]: start[c] - 2 + (end[c] - start[c]) / 2
        }))
      );

  const fontSize = 12 / globalScale;
  ctx.font = `${fontSize}px Sans-Serif`;

  ctx.fillStyle = 'rgba(255, 255, 255)';
  const { x: textX, y: textY } = textPos;
  ctx.fillText(label, textX, textY);
};

const nodeColor = (node: INode): string => {
  if (node?.start && node?.end) {
    return '#ff00ff';
  }

  if (node?.start) {
    return '#0000ff';
  }

  if (node?.end) {
    return '#ff0000';
  }

  if (node?.selected) {
    return '#ccc';
  }

  return '#fff';
};

export { nodeCanvasObject, linkCanvasObject, nodeColor };
