import service from '../utils/request';
export interface PersonalSkill {
    /**
     * 主键ID
     */
    id?: number;

    /**
     * 技能名称
     */
    name: string;

    /**
     * 熟练程度
     */
    proficiencyId: number;

    /**
     * 经验年数
     */
    experienceYears: Date;

    /**
     * 删除标志（0: 未删除, 1: 已删除）
     */
    deleteFlag: number;

    /**
     * 创建时间
     */
    createTime: Date;

    /**
     * 更新时间
     */
    updateTime: Date;
}


// GET 请求示例
export const getSkillList = () => {
    return service.get('/site/skill/list');
};

// POST 请求示例
export const getById = (id:  number) => {
    return service.get(`/site/skill/getById/${id}`);
};

