package com.ahaoqi.site.controller;


import com.ahaoqi.common.entity.PersonalSkill;
import com.ahaoqi.common.exception.Assert;
import com.ahaoqi.common.result.R;
import com.ahaoqi.common.result.ResponseEnum;
import com.ahaoqi.site.service.PersonalSkillService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/ahaoqi/site/skill")
@Slf4j
@CrossOrigin
public class PersonalSkillController {

    @Resource
    private PersonalSkillService personalSkillService;

    @GetMapping("/list")
    public R list()
    {
        List<PersonalSkill> list = personalSkillService.list();
        return R.ok().data("list", list);
    }

    @GetMapping("/getById/{id}")
    public R getById(@PathVariable Integer id)
    {
        PersonalSkill skill = personalSkillService.getById(id);
        return R.ok().data("skill", skill);
    }

    @PostMapping("/save")
    public R save(@RequestBody PersonalSkill personalSkill)
    {
        Assert.notNull(personalSkill, ResponseEnum.NULL_ERROR);
        boolean save = personalSkillService.save(personalSkill);
        if (save) {
            return R.ok().message("添加成功");
        } else  {
            return R.error().message("添加失败");
        }
    }
}
