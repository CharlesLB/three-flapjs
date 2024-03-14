import { ILink, INode } from '@/@types/components/Automaton';

const nodeCanvasObject = (node: INode, ctx: CanvasRenderingContext2D, globalScale: number, labelColor: string) => {
  if (node.end) endNodeCanvas(node, ctx);

  if (node.start) startNodeCanvas(node, ctx);

  const label = `${node?.name}`;
  const fontSize = 12 / globalScale;
  ctx.font = `${fontSize}px Sans-Serif`;

  ctx.fillStyle = 'rgba(255, 255, 255)';

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = node.color || labelColor;
  ctx.fillText(label, node?.x || 0, node?.y || 0);
};

const endNodeCanvas = (node: INode, ctx: CanvasRenderingContext2D) => {
  const { x, y } = node;

  const nodeRadius = 6;
  const innerColor = 'white';
  const borderColor = 'white';
  const borderWidth = 1;

  ctx.beginPath();
  // @ts-ignore
  ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
  ctx.fillStyle = innerColor;
  ctx.fill();

  ctx.beginPath();
  // @ts-ignore
  ctx.arc(x, y, nodeRadius + 4 * borderWidth, 0, 2 * Math.PI);
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = borderColor;
  ctx.stroke();
};

const startNodeCanvas = (node: INode, ctx: CanvasRenderingContext2D) => {
  const triangleSize = 5;
  const triangleColor = 'white';
  const lineWidth = 2;

  const { x, y } = node;

  ctx.beginPath();
  // @ts-ignore
  const xpos = x - 2 * triangleSize;
  // @ts-ignore
  ctx.moveTo(xpos, y);
  // @ts-ignore
  ctx.lineTo(xpos - triangleSize, y + triangleSize);
  // @ts-ignore
  ctx.lineTo(xpos - triangleSize, y - triangleSize);
  ctx.closePath();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = triangleColor;
  ctx.stroke();
  ctx.fillStyle = triangleColor;
  ctx.fill();
};

const linkCanvasObject = (link: ILink, ctx: CanvasRenderingContext2D, globalScale: number, nodes: INode[], defaultColor: string) => {
  const getYWithCurvature = (start: INode, end: INode): number => {
    // @ts-ignore
    const centerPosition = start.y - 2 + (end.y - start.y) / 2;

    // @ts-ignore
    if (start.x < end.x) {
      // @ts-ignore
      return centerPosition + (start.x - end.x) / 4;
    }

    // @ts-ignore
    if (start.x > end.x) {
      // @ts-ignore
      return centerPosition - (end.x - start.x) / 4;
    }

    return centerPosition;
  };

  const getXWithCurvature = (start: INode, end: INode): number => {
    // @ts-ignore
    const centerPosition = start.x - 2 + (end.x - start.x) / 2;

    // @ts-ignore
    if (start.y < end.y) {
      // @ts-ignore
      return centerPosition + (end.y - start.y) / 4;
    }

    // @ts-ignore
    if (start.y > end.y) {
      // @ts-ignore
      return centerPosition - (start.y - end.y) / 4;
    }

    return centerPosition;
  };

  const isSelfLoop = link.source === link.target;

  const label = `${link?.name}`;
  const start = typeof link.source === 'string' || typeof link.source === 'number' ? nodes[Number(link.source)] : link.source;
  const end = typeof link.target === 'string' || typeof link.target === 'number' ? nodes[Number(link.target)] : link.target;

  const textPos = isSelfLoop
    ? {
        x: (start?.x || 0) + 22,
        y: (start?.y || 0) - 22
      }
    : link.curvature
    ? {
        x: getXWithCurvature(start as INode, end as INode),
        y: getYWithCurvature(start as INode, end as INode)
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

  ctx.fillStyle = defaultColor;
  const { x: textX, y: textY } = textPos;
  ctx.fillText(label, textX, textY);
};

const nodeColor = (node: INode, defaultColor: string): string => {
  return node?.selected || node?.testPosition ? '#686868' : defaultColor;
};

export { nodeCanvasObject, linkCanvasObject, nodeColor };
