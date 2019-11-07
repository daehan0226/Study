---
layout: post
title: React_material_ui
categories: JS

---

Material-UI



* Switch 

        import React, { Component } from 'react';
        import { withStyles } from '@material-ui/core/styles';
        import FormGroup from '@material-ui/core/FormGroup';
        import FormControlLabel from '@material-ui/core/FormControlLabel';
        import Switch from '@material-ui/core/Switch';
        import { classes } from 'istanbul-lib-coverage';

        const IOSSwitch = withStyles(theme => ({
          root: {
            width: 74,
            height: 32,
            padding: 6,
            marginRight: 0,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          },
          switchBase: {
            paddingLeft: 12,
            paddingTop: 6,
            '&$checked': {
              transform: 'translateX(32px)',
              color: theme.palette.common.white,
              '& + $track': {
                backgroundColor: '#696969',
                opacity: 1,
                border: 'none',
              },
            },
            '&$focusVisible $thumb': {
              color: '#696969',
              border: '6px solid #fff',
            },
          },

          switchIcon: {
            alignItems: "center"
          },

          thumb: {
            width: 20,
            height: 20,
          },
          track: {
            borderRadius: 16,
            backgroundColor: "#2eabc0",
            width: 74,
            height: 32,
            opacity: 1,
            transition: theme.transitions.create(['background-color']),
          },


          checked: {},
          focusVisible: {},
        }))(({ classes, ...props }) => {
          return (
            <Switch
              focusVisibleClassName={classes.focusVisible}
              disableRipple
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
                label: classes.label,
              }}
              {...props}
            ><div>test</div></Switch>
          );
        });


        const useStyles = theme => ({   스타일 설정 (1)   theme 반드시 필요.
          switchLocation: {
            marginLeft: 0
          },
        });

        class CustomizedSwitch extends Component {
          state = {
            isActive : this.props.isActive,                  // 부모 컴포넌트에서 받은 데이터 

          };

          UNSAFE_componentWillReceiveProps = props => {     // 해당 클래스(스위치)의 props 가 변경될때 호출하여 데이터 업데이트
            this.setState({
              isActive : props.isActive,
            });
          };

          handleStartClick = () => {                         // 부모에서 받은 이벤트 호출
            this.props.onStartClick();
          };

          handleStopClick = () => {                         // 부모에서 받은 이벤트 호출
            this.props.onStopClick();
          };

          render() {
            const { classes } = this.props;        // 스타일 설정 (3) useStyle 을 받아서 render 
            return (
              <FormGroup>
                <FormControlLabel
                  classes={{
                    root: classes.switchLocation   // 스타일 설정 (4) usestyle를 classes 로 받아서 스타일 적용
                  }}
                  control={
                    <IOSSwitch
                      checked={this.state.isActive * 1 === 0 ? true : false}
                      onChange={this.props.isActive * 1 === 1 ? this.handleStopClick : this.handleStartClick}
                      value={this.state.isActive}
                    />
                  }
                  // label={ state.checked === true ? "On" : "Off" }  // 오른쪽에 라벨 글 
                />
              </FormGroup>
            );
          };
        }

        export default withStyles(useStyles)(CustomizedSwitch);  // 스타일 설정 (2) 해당 컴포넌트에 스타일 주기
