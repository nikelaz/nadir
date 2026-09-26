#ifndef RESULT_H
#define RESULT_H

#include <string>
#include <string_view>

enum class ResultStatus {
    Ok,
    Error,
};

struct Result {
    ResultStatus status;
    std::string error;
};

Result result_ok();
Result result_error(std::string_view error_message);

#endif
