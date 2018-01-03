'use strict';
import _ from 'lodash/core';
import moment from 'moment';


class CalcController {
    constructor($log, NgTableParams) {
        'ngInject';
        this.$log = $log;

        const data = [
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
            { mirrorName: "WIN2008R2_50G", type: 'Windows', systemType: 'Windows Server 2008 R2 x64', mirrorType: 'image', isPublic: '是', systemStructure: 'x86_64', diskFormat: 'raw', status: '正常', createTime: '2017-12-19 22:00:27' },
        ];

        this.tableParams = new NgTableParams({}, {
            dataset: data
        });
    }

    $onInit() {
        this.lodash_version = _.VERSION;
        this.moment_version = moment.version;
    }
}

CalcController.$inject = ['$log', 'NgTableParams'];


export default CalcController;