class Disk {
    size: number;

    constructor(size: number) {
        this.size = size;
    }
}

class Stake {
    disks: Disk[];

    constructor() {
        this.disks = [];
    }
}

class Board {
    stakeLeft: Stake;
    stakeMiddle: Stake;
    stakeRight: Stake;

    constructor() {
        this.stakeLeft = new Stake();
        this.stakeMiddle = new Stake();
        this.stakeRight = new Stake();
    }
}

const createBoard = (disksCount: number): Board => {
    const board = new Board();
    for (let i = disksCount; i > 0; i--) {
        board.stakeLeft.disks.push(new Disk(i))
    }
    return board;
}

// TODO: Move disk