import { ILink, INode } from '@/@types/components/Automaton';

const nodeCanvasObject = (node: INode, ctx: CanvasRenderingContext2D, globalScale: number) => {  
  if (node.end)
    endNodeCanvas(node, ctx);

  if (node.start)
    startNodeCanvas(node, ctx);

  const label = `${node?.name}`;
  const fontSize = 12 / globalScale;
  ctx.font = `${fontSize}px Sans-Serif`;

  ctx.fillStyle = 'rgba(255, 255, 255)';

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = node.color || '#000';
  ctx.fillText(label, node?.x || 0, node?.y || 0);
};

const endNodeCanvas = (node: INode, ctx: CanvasRenderingContext2D) => {
  const { x, y } = node;

  if (!x || !y)
    throw new Error("Eh necessario saber a posicao do no")

  const nodeRadius = 6;
  const innerColor = 'white';
  const borderColor = 'white';
  const borderWidth = 1;
        
  // Draw the inner circle
  ctx.beginPath();
  ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
  ctx.fillStyle = innerColor;
  ctx.fill();

  // Draw the outer border
  ctx.beginPath();
  ctx.arc(x, y, nodeRadius + 4 * borderWidth, 0, 2 * Math.PI);
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = borderColor;
  ctx.stroke();
}

const startNodeCanvas = (node: INode, ctx: CanvasRenderingContext2D) => {
  const triangleSize = 5;
  const triangleColor = 'white';
  const lineWidth = 2;

  const { x, y } = node;

  if (!x || !y)
  throw new Error("Eh necessario saber a posicao do no")

  // Draw the triangle

  
  ctx.beginPath();
  const xpos = x - 2*triangleSize;
  ctx.moveTo(xpos, y);
  ctx.lineTo(xpos - triangleSize, y + triangleSize);
  ctx.lineTo(xpos - triangleSize, y  - triangleSize);
  // ctx.moveTo(x - 2*triangleSize, y + triangleSize /2 );
  // ctx.lineTo(x - triangleSize, y - triangleSize / 2);
  ctx.closePath();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = triangleColor;
  ctx.stroke();
  ctx.fillStyle = triangleColor;
  ctx.fill();
}

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
  if (node?.testPosition) {
    return '#FF4500';
  }

  if (node?.start && node?.end) {
    return '#ff00ff';
  }


  if (node?.selected) {
    return '#686868';
  }

  return '#fff';
};

export { nodeCanvasObject, linkCanvasObject, nodeColor };
