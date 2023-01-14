export class AsciiClass {
    cellArray!: Cell[]
    symbols!: string
    pixels!: ImageData
    ctx: CanvasRenderingContext2D
    width: number
    height: number

    constructor(ctx: CanvasRenderingContext2D, width: number, height: number, image: CanvasImageSource) {
        this.ctx = ctx
        this.height = height
        this.width = width
        this.ctx.drawImage(image, 0, 0, this.width, this.height)
        this.pixels = this.ctx.getImageData(0, 0, this.height, this.width)
    }

    convertToSymbol(color: number) {

        const density = "`.-':_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@"
        const len = density.length
        const charIndex = Math.floor(((len - 1) / 255) * color)

        const symbol = density[charIndex]

        return symbol
    }

    scanImage(cellSize: number) {
        this.cellArray = []
        for (let y = 0; y < this.pixels.height; y += cellSize) {
            for (let x = 0; x < this.pixels.width; x += cellSize) {
                const posX = x * 4
                const posY = y * 4
                const pos = (posY * this.pixels.width) + posX

                if (this.pixels.data[pos + 3] > 128) {
                    const red = this.pixels.data[pos]
                    const green = this.pixels.data[pos + 1]
                    const blue = this.pixels.data[pos + 2]
                    const avareageColor = (red + green + blue) / 3
                    const color = `rgb(${red},${green},${blue})`
                    const symbol = this.convertToSymbol(avareageColor)

                    this.cellArray.push(new Cell(x, y, symbol, color))
                }
            }
        }
    }

    drawAscii(checkBackground: boolean, backgroundColor: string) {
        this.ctx.clearRect(0, 0, this.width, this.height)
        if (checkBackground) {
            this.ctx.fillStyle = backgroundColor
            this.ctx.fillRect(0, 0, this.width, this.height)
        } else {
            this.ctx.clearRect(0, 0, this.width, this.height)
        }
        for (let i = 0; i < this.cellArray.length; i++) {
            this.cellArray[i].draw(this.ctx)
        }
    }

    draw(cellSize: number, checkBackground: boolean, backgroundColor: string) {
        this.scanImage(cellSize)
        this.drawAscii(checkBackground, backgroundColor)
    }
}

export class Cell {
    x: number
    y: number
    symbol: string
    color: string
    constructor(x: number, y: number, symbol: string, color: string) {
        this.x = x
        this.y = y
        this.symbol = symbol
        this.color = color
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.fillText(this.symbol, this.x, this.y)
    }
}