import { N4chanEntityBase } from '../N4chanEntityBase';
import type { N4chanSDK } from '../N4chanSDK';
import type { Control } from '../types';
import type { Board, BoardListMatch } from '../N4chanTypes';
declare class BoardEntity extends N4chanEntityBase<Board> {
    constructor(client: N4chanSDK, entopts: any);
    make(this: BoardEntity): BoardEntity;
    list(this: any, reqmatch?: BoardListMatch, ctrl?: Control): Promise<BoardEntity[]>;
}
export { BoardEntity };
