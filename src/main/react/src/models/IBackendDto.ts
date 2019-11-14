interface IBackendDto<T> {

    fromBackendDto(value: T): void;
}

export default IBackendDto;