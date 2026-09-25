#include "result.h"

Result result_ok() {
    return {
        .status = ResultStatus::Ok,
        .error = "",
    };
}

Result result_error(std::string_view error_message) {
    return {
        .status = ResultStatus::Error,
        .error = error_message,
    };
}
