const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1546412605792",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MESSAGE": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `broadcaster.broadcast(String(/*{MESSAGE}*/));`,
                "sections": {
                    "include": [
                        "\"src/OfflineBroadcast.h\""
                    ],
                    "declare": `OfflineBroadcast broadcaster;`,
                    "setup": `Serial.begin(115200);`,
                    "_loop": this.funcs.block1546412605792CodesLoop
                }
            }
        },
        "handler": this.funcs.BLOCK_1546412605792
    },
    {
        "opcode": "BLOCK_1546413597853",
        "blockType": "command",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {
            "MESSAGE": {
                "type": "string",
                "defaultValue": "message"
            },
            "VALUE": {
                "type": "string",
                "defaultValue": "1",
                "checkNumber": true
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `broadcaster.broadcast(String(/*{MESSAGE}*/),String(/*{VALUE}*/));`,
                "sections": {
                    "include": [
                        "\"src/OfflineBroadcast.h\""
                    ],
                    "declare": `OfflineBroadcast broadcaster;`,
                    "setup": `Serial.begin(115200);`,
                    "_loop": this.funcs.block1546413597853CodesLoop
                }
            }
        },
        "handler": this.funcs.BLOCK_1546413597853
    },
    {
        "opcode": "BLOCK_1546413700881",
        "blockType": "hat",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 12,
        "arguments": {
            "MESSAGE": {
                "type": "string",
                "defaultValue": "message"
            }
        },
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `broadcaster.on(String(/*{MESSAGE}*/),broadcastHandler/*{$INDEX}*/);`,
                "sections": {
                    "include": [
                        "\"src/OfflineBroadcast.h\""
                    ],
                    "lib": this.funcs.block1546413700881CodesLib,
                    "declare": this.funcs.block1546413700881CodesDeclare,
                    "setup": `Serial.begin(115200);`,
                    "_loop": this.funcs.block1546413700881CodesLoop
                }
            }
        },
        "handler": this.funcs.BLOCK_1546413700881
    },
    {
        "opcode": "BLOCK_1546415356012",
        "blockType": "string",
        "checkboxInFlyout": false,
        "hidden": false,
        "gap": 36,
        "arguments": {},
        "branchCount": 0,
        "platform": [
            "mblockpc",
            "mblockweb"
        ],
        "codes": {
            "arduinoc": {
                "code": `broadcaster.broadcastValue`,
                "sections": {
                    "include": [
                        "\"src/OfflineBroadcast.h\""
                    ],
                    "declare": `OfflineBroadcast broadcaster;`,
                    "setup": `Serial.begin(115200);`,
                    "_loop": this.funcs.block1546415356012CodesLoop
                }
            }
        },
        "handler": this.funcs.BLOCK_1546415356012
    }
]);

export default blocks;