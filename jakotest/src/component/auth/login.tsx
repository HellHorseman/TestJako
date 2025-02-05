"use client";

import React, {useState} from "react";
import {Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@mui/material";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        let isValid = true;

        if (!email) {
            setEmailError('Поле не может быть пустым');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Поле не может быть пустым');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            alert('Log in');
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (emailError) {
            setEmailError('');  // Убираем ошибку, как только начинается ввод
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (passwordError) {
            setPasswordError('');  // Убираем ошибку, как только начинается ввод
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            maxHeight: '100%',
            maxWidth: '100%',
            backgroundColor: 'white',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '60vh',
                maxHeight: '100%',
                maxWidth: '40%',
                padding: 3,
            }}>
                <img
                    src="/image/logo.png"
                    alt="Logo"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}/>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={10}>
                        <Box
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 2,
                                boxShadow: 3,
                                padding: 4,
                                width: '100%',
                            }}
                        >
                            <Typography variant="h5" gutterBottom>
                                Добро пожаловать!
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Войдите в Ваш аккаунт
                            </Typography>
                            <TextField
                                label="Введите e-mail"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={handleEmailChange}
                                error={!!emailError}
                                helperText={emailError}
                            />
                            <TextField
                                label="Введите пароль"
                                variant="outlined"
                                type="password"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={handlePasswordChange}
                                error={!!passwordError}
                                helperText={passwordError}
                            />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <FormControlLabel
                                    control={<Checkbox/>}
                                    label="Запомнить меня"
                                    sx={{marginTop: 1}}
                                />
                                <Typography
                                    variant="body2"
                                    color="primary"
                                    sx={{cursor: 'pointer'}}
                                    onClick={() => alert('Забыли пароль!')}
                                >
                                    Забыли пароль?
                                </Typography>
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{marginTop: 2}}
                                onClick={handleLogin}
                            >
                                Войти
                            </Button>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: 5
                            }}>
                                <Typography variant="body2" color="textSecondary">
                                    Нет аккаунта?
                                </Typography>
                                <Typography variant="body2"
                                            color="primary"
                                            sx={{
                                                cursor: 'pointer',
                                                marginLeft: '7px'
                                            }}
                                            onClick={() => alert('Зарегестрируйтесь!')}>
                                    Зарегестрируйтесь
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Login;