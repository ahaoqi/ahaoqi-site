package com.ahaoqi.common.entity;

import lombok.Data;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * 个人技能实体类
 */
@Data
@TableName("personal_skills")
public class PersonalSkill implements Serializable {

    /**
     * 主键ID
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 技能名称
     */
    private String name;

    /**
     * 熟练程度
     */
    private Integer proficiencyId;

    /**
     * 经验年数
     */
    private LocalDateTime experienceYears;

    /**
     * 删除标志（0: 未删除, 1: 已删除）
     */
    @TableField("delete_flag")
    private Integer deleteFlag;

    /**
     * 创建时间
     */
    @TableField("create_time")
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    @TableField("update_time")
    private LocalDateTime updateTime;
}
