var AjaxForm = {

    initialize: function (afConfig) {
        document.write('<script src="' + afConfig.assetsUrl + 'js/lib/jquery.form.min.js"><\/script>');
        document.write('<script src="' + afConfig.assetsUrl + 'js/lib/sweetalert.min.js"><\/script>');

        $(document).on('submit', afConfig.formSelector, function (e) {
            $(this).ajaxSubmit({
                dataType: 'json',
                data: {pageId: afConfig.pageId},
                 url: afConfig.actionUrl,
                beforeSerialize: function (form, options) {
                    form.find(':submit').each(function () {
                        if (!form.find('input[type="hidden"][name="' + $(this).attr('name') + '"]').length) {
                            $(form).append(
                                $('<input type="hidden">').attr({
                                    name: $(this).attr('name'),
                                    value: $(this).attr('value')
                                })
                            );
                        }
                    })
                },
                beforeSubmit: function (fields, form) {
                    if (typeof(afValidated) != 'undefined' && afValidated == false) {
                        return false;
                    }
                    form.find('.error').html('');
                    form.find('.error').removeClass('error');
                    form.find('input,textarea,select,button').attr('disabled', true);
                    return true;
                },
                success: function (response, status, xhr, form) {
                    form.find('input,textarea,select,button').attr('disabled', false);
                    response.form = form;
                    $(document).trigger('af_complete', response);
                    if (!response.success) {
                        AjaxForm.Message.error(response.message);
                        if (response.data) {
                            var key, value;
                            for (key in response.data) {
                                if (response.data.hasOwnProperty(key)) {
                                    value = response.data[key];
                                    form.find('.error_' + key).html(value).addClass('error');
                                    form.find('[name="' + key + '"]').addClass('error');
                                }
                            }
                        }
                    }
                    else {
                        AjaxForm.Message.success(response.message);
                        form.find('.error').removeClass('error');
                        form[0].reset();
                    }
                }
            });
            e.preventDefault();
            return false;
        });

        $(document).on('reset', afConfig.formSelector, function (e) {
            $(this).find('.error').html('');
            AjaxForm.Message.close();
        });
    }

};


AjaxForm.Message = {
    success: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
            swal({
                title: "",
                text: message,
                confirmButtonColor: "#3a9731",
                confirmButtonText: "ОK",
                timer: 2000
            });
        }
    },
    error: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
            //swal("", message, "error");
        }
    },
    info: function (message, sticky) {
        if (message) {
            if (!sticky) {
                sticky = false;
            }
            swal({
                title: "",
                text: message,
                confirmButtonColor: "#93C834",
                confirmButtonText: "ОK"
            });
        }
    },
    close: function () {
        $('.close-content').css('display','none');
    }
};
